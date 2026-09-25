# Introduction to Embedded Systems Specification

## What is a Specification?

A **specification** is a precise description of what a system must do and the constraints it must satisfy. It is the reference against which the design is later verified, so ambiguity or omissions here lead directly to faulty systems.

---

## Requirements

Requirements are usually divided into two kinds:

- **Functional requirements** — *what* the system does (e.g., "open the valve when pressure exceeds 5 bar")
- **Non-functional requirements** — *how well* it does it (e.g., timing, power, cost, reliability, safety)

!!! warning
    Natural-language requirements are easy to write but often ambiguous. Critical properties such as deadlines should be stated precisely and measurably.

---

## Models of Computation

A **model of computation (MoC)** defines how components of a system execute and communicate. Choosing a suitable MoC makes the specification easier to write, analyse, and implement.

| Model | Describes | Typical Use |
|-------|-----------|-------------|
| **Finite State Machines (FSMs)** | States and transitions triggered by events | Control logic, protocols |
| **Statecharts** | Hierarchical and concurrent FSMs | Complex reactive control |
| **Dataflow (e.g., SDF)** | Actors exchanging tokens over channels | Signal and media processing |
| **Petri Nets** | Concurrency, synchronisation, and shared resources | Manufacturing, distributed systems |
| **Discrete Event** | Timestamped events processed in order | Hardware simulation |

!!! info "Key Insight"
    No single model suits every system. Many designs combine models — for example, statecharts for control and dataflow for signal processing.

---

## Specification Languages and Tools

Models are expressed using languages and tools such as:

- **UML / SysML** — graphical modelling of structure and behaviour
- **Simulink / Stateflow** — dataflow and state machine modelling with simulation and code generation
- **SDL** — communicating state machines for protocols
- **Hardware description languages** (VHDL, Verilog) — hardware behaviour and structure

---

## Properties of a Good Specification

A good specification is:

- **Unambiguous** — has exactly one interpretation
- **Complete** — covers all required behaviour, including error cases
- **Consistent** — contains no contradictory requirements
- **Verifiable** — every requirement can be checked by test or analysis
- **Implementation-independent** — describes *what*, not *how*

---

## Next Steps

- Review the overall design process in [Embedded Systems Design](../embedded-systems-design/introduction.md)
- Continue to [HW/SW Co-Design](../hw-sw-codesign/introduction.md) to see how a specification is partitioned and mapped onto hardware and software
