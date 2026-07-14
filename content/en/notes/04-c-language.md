---
title: Embedded C Review Checklist
slug: embedded-c-checklist
description: A systematic guide to data types, bit operations, pointers, volatile, interrupts, state machines, module interfaces and testability in embedded C.
category: Programming Languages
date: 2026-07
tags: [C, Embedded, Pointer, Volatile]
---
## What Makes Embedded C Different
The language is the same, but the environment includes direct register access, tight memory and compute limits, interrupts, deadlines, concurrency and hardware faults. Compilation is only the first check. Width, execution time, object lifetime, hardware ordering and failure states must be explicit.

## Fixed-Width Integers and Conversion
Use `uint8_t`, `int16_t` and `uint32_t` for registers, protocols and storage formats. Mixed signed/unsigned operations can turn a negative value into a large unsigned one, and integer promotion can change small operands before arithmetic.

```c
uint16_t adc = 3000U;
uint32_t millivolts = ((uint32_t)adc * 3300U) / 4095U;
```

Widen before multiplication so the intermediate result cannot overflow.

## Overflow, Boundaries and Units
Unsigned overflow wraps modulo its range; do not rely on signed overflow. Names such as `timeout_ms`, `frequency_hz` and `voltage_mv` prevent unit ambiguity. Check intermediate as well as final ranges in sensor formulas.

## Bit Operations and Registers
```c
reg |= (1U << bit);        /* set */
reg &= ~(1U << bit);       /* clear */
reg ^= (1U << bit);        /* toggle */
state = (reg >> bit) & 1U; /* read */
```

Keep `bit` below the type width and shift unsigned values. Use named masks rather than unexplained hex constants. Read the reference manual before read-modify-write: write-one-to-clear, clear-on-read and reserved-bit rules require special handling.

## Pointers and Object Lifetime
Pointers do not carry buffer length or lifetime. Accept data and length together:

```c
bool uart_send(const uint8_t *data, size_t length);
```

Never return the address of a local object. Long-lived systems often prefer static storage or fixed pools over fragmented dynamic allocation. `const uint8_t *p` protects pointed data through `p`; `uint8_t * const p` fixes the pointer; combining both fixes both.

## Arrays, Strings and Buffers
An array parameter decays to a pointer, so pass length explicitly. Verify string termination and never trust external lengths before writing or parsing. Use bounded formatting and check its return value. Binary buffers may contain zero bytes and are not strings.

## Endianness, Alignment and Layout
Protocols define byte order explicitly. Do not cast a byte buffer to a structure pointer because alignment, padding and strict aliasing differ by platform.

```c
uint16_t read_u16_be(const uint8_t *data)
{
    return (uint16_t)(((uint16_t)data[0] << 8) | data[1]);
}
```

## What volatile Does and Does Not Do
`volatile` forces observable reads and writes for hardware registers or data changed asynchronously by an ISR. It does not guarantee atomic multi-byte access, transaction boundaries or task synchronization. Use critical sections, queues, semaphores, mutexes or atomic operations where the data relationship requires them.

## Interrupt Service Routines
Keep ISRs short: capture status, move minimal data, clear the source and notify a task or main loop. Verify clear order, shared-data races, priority, maximum duration, nesting and use of RTOS ISR-specific APIs. Ring-buffer producer and consumer ownership must ensure the consumer never sees partially written data.

## Prefer State Machines to Blocking Waits
Split peripheral or protocol sequences into observable states with entry, action, exit and timeout:

```c
switch (state) {
case UART_IDLE:
    if (start_requested) {
        start_transfer();
        deadline = now_ms + 100U;
        state = UART_WAIT;
    }
    break;
case UART_WAIT:
    if (transfer_done()) state = UART_IDLE;
    else if (time_reached(now_ms, deadline)) {
        abort_transfer();
        state = UART_ERROR;
    }
    break;
case UART_ERROR:
    report_error();
    state = UART_IDLE;
    break;
}
```

## Compare Time Safely Across Wrap
For durations within the unambiguous half-range of the counter, unsigned subtraction works across one wrap:

```c
bool time_elapsed(uint32_t now, uint32_t start, uint32_t duration)
{
    return (uint32_t)(now - start) >= duration;
}
```

## Layer Module Interfaces
- Driver: GPIO, UART, SPI and ADC register access.
- Service: sensors, protocols and buffers.
- Application: state machines, control policies and user logic.

Headers expose stable interfaces and necessary types. File-private state and helpers remain `static`. Return values should distinguish success, busy, timeout and invalid parameters where the caller can act differently.

## Errors and Assertions
Return errors that callers can recover from. Assertions capture impossible internal conditions during development, with a defined production policy such as fault recording and controlled reset. Do not silently discard I2C NACK, Flash failure or full-buffer results. Keep high-rate logs bounded so diagnostics do not break real-time behavior.

## Testability and Verification
Separate pure calculations from hardware effects. An ADC-to-temperature function that accepts and returns ordinary values can be tested on a PC. Cover normal, min/max, empty input, timeout, checksum failure, full buffer, repeated initialization and ISR/main interleavings. Enable meaningful compiler warnings and treat conversion, bounds and ignored-return warnings seriously.

## Pre-Commit Checklist
- Are fixed-format fields represented with fixed-width types?
- Can intermediate multiplication, shifts or conversions overflow?
- Do buffer interfaces include length?
- Is protocol byte order explicit?
- Is `volatile` limited to truly asynchronous objects?
- Does shared data require a critical section, queue or atomic operation?
- Are ISRs free of blocking, long loops and unnecessary logs?
- Does every wait have a timeout and error exit?
- Do state machines cover every state and failure transition?
- Are hardware access and business logic separated?
- Are peripheral return values and boundaries verified?
- Can core calculations be tested without hardware?
