# Mapping

## Overview

**Mapping** is the process of assigning partitioned tasks to specific resources on a target platform. While partitioning decides *what* goes to hardware vs software, mapping decides *where* on the platform each task executes.

In **platform-based design**, the target architecture is a pre-existing platform with a fixed set of processing elements, memory, and communication infrastructure. The mapping step bridges the gap between an abstract partitioned specification and a concrete implementation on this platform.

---

## Platform-Based Design

Platform-based design is a methodology where systems are built on top of pre-defined hardware platforms rather than designing custom hardware from scratch. This approach:

- **Reduces design time** by reusing validated platform components
- **Lowers cost** through economies of scale
- **Constrains the design space** to feasible implementations on the chosen platform

A platform typically consists of:

| Component | Examples |
|-----------|----------|
| **Processing elements (PEs)** | CPUs, DSPs, GPUs, FPGAs, custom accelerators |
| **Memory hierarchy** | Caches, scratchpads, shared memory, DMA |
| **Communication infrastructure** | Buses, crossbars, networks-on-chip (NoC) |
| **I/O interfaces** | Timers, interrupts, peripherals, sensors, actuators |

---

## The Mapping Problem

Given:

- A set of tasks $T = \{t_1, t_2, \ldots, t_n\}$ from the partitioning step
- A platform with resources $R = \{r_1, r_2, \ldots, r_m\}$

Find an assignment $M: T \rightarrow R$ that optimises objectives such as:

- **Minimise execution time** (meet real-time deadlines)
- **Minimise communication cost** (reduce data transfer overhead)
- **Balance resource utilisation** (avoid bottlenecks)
- **Minimise energy consumption**

subject to constraints:

- Resource capacity (memory, computation)
- Task compatibility (not all tasks can run on all PEs)
- Communication bandwidth
- Real-time deadlines

---

## Mapping vs Partitioning

| Aspect | Partitioning | Mapping |
|--------|-------------|---------|
| **Question** | HW or SW? | Which specific resource? |
| **Abstraction** | High-level (HW/SW domains) | Low-level (platform resources) |
| **Input** | Task graph | Partitioned tasks + platform model |
| **Output** | HW/SW assignment | Resource binding + schedule |
| **Constraints** | Communication cost, area, power | Deadlines, capacity, bandwidth |

!!! note
    In practice, partitioning and mapping are often interleaved or performed jointly, as mapping constraints can influence partitioning decisions.

---

## Mapping Techniques

### Static Mapping

Tasks are assigned to resources at design time. Suitable when the workload is predictable.

- **Exhaustive search**: Optimal but $O(m^n)$ complexity — only feasible for small problems
- **Heuristic approaches**: Greedy assignment, simulated annealing, genetic algorithms
- **Integer Linear Programming (ILP)**: Formulate as a constrained optimisation problem

### Dynamic Mapping

Tasks are assigned at runtime based on current system state. Used when workload varies.

- **Priority-based scheduling**: Assign tasks to available PEs based on priority
- **Load balancing**: Distribute tasks to equalise PE utilisation
- **Migration**: Move tasks between PEs in response to changing conditions

---

## Example: Mapping to a Heterogeneous Platform

Consider a platform with a CPU and an FPGA accelerator:

**Task Graph:**

```
T1 --> T2 --> T4
       ^      ^
       T3 ----+
```

**Platform:**

```
+-------------+-------------+
|     CPU     |    FPGA     |
|             |             |
|   Memory    |   Memory    |
+-------------+-------------+
|          Bus / NoC        |
+---------------------------+
```

After partitioning: T1, T2 → SW; T3, T4 → HW

Mapping decides:

- T1, T2 → CPU (execution order? scheduling?)
- T3 → FPGA accelerator block A
- T4 → FPGA accelerator block B
- Communication: T2→T4 data transfer via shared memory or DMA

The mapping must ensure that data dependencies are respected, communication latency is accounted for, and deadlines are met.

---

## Summary

| Concept | Description |
|---------|-------------|
| **Mapping** | Assigning tasks to specific platform resources |
| **Platform-based design** | Building on pre-defined hardware platforms |
| **Static mapping** | Fixed assignment at design time |
| **Dynamic mapping** | Runtime assignment based on system state |

---

## Related Material

- [HW/SW Co-Design Introduction](introduction.md)
- [Design Space Exploration](design-space-exploration.md)
- [Partitioning Algorithms](partitioning.md)
