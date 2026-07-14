---
title: FreeRTOS Priority Is About Urgency, Not Importance
slug: freertos-priority-design
description: Design task priorities from deadlines, blocking relationships and resource contention rather than business labels.
category: Embedded Systems
date: 2026-07-10
tags: [FreeRTOS, STM32, Scheduling, RTOS]
---
## Priority Describes Scheduling Urgency
A higher FreeRTOS priority does not mean a task is more important to the product. It means the scheduler runs that ready task first. Short response deadlines, buffers that can overflow and work that unblocks downstream processing deserve priority. An OLED refresh can often wait; draining a DMA receive buffer may not.

## Record Timing Properties First
For each task, record its trigger, deadline, worst execution time, preemption constraints, peripheral or resource waits and the consequence of backlog. Without these facts, priority assignment becomes intuition and eventually every task is raised.

## Use a Small Priority Hierarchy
One practical starting point is:

```text
High: short-deadline movement, control loops and urgent notifications
Medium: protocol parsing, state estimation and business state machines
Low: display, logging, statistics and maintenance
Idle: cleanup and low-priority diagnostics
```

Tasks in one layer do not need unique priorities. Fewer levels are easier to reason about.

## Use vTaskDelayUntil for Periodic Work
`vTaskDelay()` adds the task's execution time to every interval. A stable control loop should use an absolute wake reference:

```c
void ControlTask(void *argument)
{
    TickType_t last_wake = xTaskGetTickCount();
    for (;;) {
        ReadSensors();
        UpdateController();
        ApplyMotorOutput();
        vTaskDelayUntil(&last_wake, pdMS_TO_TICKS(10));
    }
}
```

This does not repair an overrun. Execution time and deadline misses still need measurement.

## Event Tasks Should Block
Wait on queues, notifications, semaphores or event groups instead of polling flags. Blocked tasks consume no CPU and reduce unnecessary context switches and power.

## Keep Interrupt Handlers Minimal
An ISR should capture status, move a small amount of data and notify a task. Parsing, logging and control calculations belong in task context. Use the `FromISR` APIs, pass the higher-priority-woken flag to `portYIELD_FROM_ISR`, and ensure interrupt priorities satisfy the FreeRTOS configuration.

## Prefer Clear Resource Ownership
One task can own a UART, I2C controller or filesystem while other tasks submit requests through a queue. This serializes access, centralizes retry and timeout handling, avoids duplicated locks and makes request order observable.

## A Binary Semaphore Is Not a Mutex
Mutexes provide priority inheritance. If a low-priority task holds a resource required by a high-priority task, inheritance reduces extended blocking by medium-priority tasks. Binary semaphores are primarily event signals; use a short-held mutex for resource ownership when a queue-owner design is not practical.

## Keep Critical Sections Tiny
Do not format strings, copy large buffers, wait for UART, erase Flash, wait for sensors or call blocking APIs while interrupts are disabled. A critical section should protect one small invariant that cannot be handled atomically, by queue or by mutex.

## Size Queues from Rates and Delay
Capacity depends on producer rate, worst consumer delay and drop policy. Record send failures and peak occupancy. Persistent near-full queues indicate a consumer timing or priority problem, not merely a need for more RAM. Stream buffers or DMA rings suit byte streams; queues suit structured messages.

## Measure Stack and Heap
Use stack high-water marks along the deepest error, logging and call paths, enable overflow and allocation-failure hooks, and convert failures into observable task names, codes or controlled resets.

## Let the Watchdog Observe Progress
Independent tasks feeding the watchdog can hide deadlock. A supervisor should confirm that critical tasks completed meaningful work within their windows, then feed the hardware watchdog once.

## Verify Under Load
Measure normal periodic operation, burst input, simultaneous display/log/storage, peripheral timeouts, near-full queues and elevated CPU load. Track execution time, maximum response delay, queue peaks, drops, minimum stack and watchdog state.

## Acceptance Checklist
- Trigger, period, worst execution time and deadline are recorded per task.
- Periodic tasks use stable wake references; event tasks block.
- ISRs perform minimal work with correct `FromISR` calls.
- Shared peripherals and data have explicit owners.
- Lock and critical-section durations are short.
- Queue peaks, drops, stack margin and timing are observable.
- The watchdog detects lost progress rather than being fed independently.
