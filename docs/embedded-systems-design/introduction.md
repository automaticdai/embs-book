# Introduction to Embedded Systems Design

## What is an Embedded System?

An **embedded system** is a computer system built into a larger product to perform a dedicated function. Unlike a general-purpose computer, it is designed around a specific application — a car's braking controller, a pacemaker, a router, or a washing machine.

---

## Characteristics

Embedded systems typically share several characteristics:

- **Dedicated function** — designed for one application, not for arbitrary software
- **Reactive** — continuously respond to inputs from sensors and the environment
- **Real-time** — must produce correct results *on time*, not just eventually
- **Resource-constrained** — limited processing power, memory, energy, and cost budget
- **Dependable** — often safety- or mission-critical, requiring high reliability

!!! example "Examples"
    Engine control units, flight controllers, medical infusion pumps, industrial PLCs, smart meters, and wireless sensor nodes are all embedded systems.

---

## Design Metrics

Embedded system design balances competing metrics:

| Metric | Description |
|--------|-------------|
| **Performance** | Latency and throughput of the system |
| **Power / Energy** | Consumption, battery life, and heat dissipation |
| **Size** | Physical dimensions and silicon area |
| **Unit Cost** | Cost to manufacture each unit |
| **NRE Cost** | One-off non-recurring engineering cost to design the system |
| **Time-to-Market** | Time taken to develop and release the product |
| **Flexibility** | Ability to change functionality after deployment |
| **Dependability** | Reliability, safety, and security |

!!! note
    Improving one metric usually worsens another — for example, custom hardware improves performance and power but raises NRE cost and time-to-market.

---

## The Design Process

A typical embedded system design process moves through increasing levels of detail:

1. **Requirements** — Capture what the system must do and the constraints it must meet
2. **Specification** — Describe the required behaviour precisely, often with formal models
3. **Architecture** — Choose the hardware platform and system structure
4. **Components** — Design the hardware and software components
5. **Integration** — Combine the components into a working system
6. **Verification and Validation** — Check that the system meets its specification and requirements

!!! info "Key Insight"
    Decisions made early in the process — during specification and architecture — have the largest effect on cost and performance, and are the most expensive to change later.

---

## Levels of Abstraction

Designers work at different levels of abstraction as the design is refined:

| Level | Hardware View | Software View |
|-------|---------------|---------------|
| **System** | Processing elements, buses, memories | Tasks and communication |
| **Architecture** | Instruction set, microarchitecture | Algorithms and data structures |
| **Implementation** | Register-transfer level, gates | Source code, machine code |

Higher levels allow faster exploration of design alternatives; lower levels give accurate estimates of timing, area, and power.

---

## Next Steps

- Learn how to describe system behaviour precisely in [Embedded Systems Specification](../specification/introduction.md)
- See how design decisions are split between hardware and software in [HW/SW Co-Design](../hw-sw-codesign/introduction.md)
