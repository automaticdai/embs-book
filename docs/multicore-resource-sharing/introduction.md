# Introduction to Multicore and Resource Sharing

## Overview

Real-time tasks rarely run in isolation. They share **resources** — data structures, peripherals, buses — and increasingly they run on **multicore** processors. Both introduce new sources of delay that schedulability analysis must account for.

---

## Resource Sharing and Priority Inversion

Shared resources are protected by mutual exclusion, so a task may have to wait for a lower-priority task to release a resource. This is **blocking**.

**Priority inversion** occurs when a high-priority task is blocked by a low-priority task holding a resource, and medium-priority tasks pre-empt the low-priority task. The high-priority task can then be delayed for an unbounded time.

!!! example "Mars Pathfinder (1997)"
    The Mars Pathfinder lander suffered repeated system resets caused by priority inversion. The problem was fixed remotely by enabling priority inheritance on the affected mutex.

---

## Resource Access Protocols

| Protocol | Idea | Properties |
|----------|------|------------|
| **Priority Inheritance (PIP)** | A task holding a resource inherits the priority of the highest task it blocks | Bounds inversion, but chained blocking and deadlock are possible |
| **Priority Ceiling (PCP)** | Each resource has a ceiling equal to the highest priority of its users; locking is restricted by ceilings | Blocked at most once, deadlock-free |
| **Immediate Ceiling (ICPP)** | A task's priority is raised to the resource ceiling as soon as it locks it | Same worst-case bound as PCP, simpler to implement |
| **Stack Resource Policy (SRP)** | Pre-emption levels control when a task may start | Works with EDF, allows shared stacks |

With a blocking term $B_i$, response-time analysis becomes:

$$R_i = C_i + B_i + \sum_{j \in hp(i)} \left\lceil \frac{R_i}{T_j} \right\rceil C_j$$

---

## Multicore Scheduling

On multicore processors, tasks can be scheduled in two main ways:

| Approach | Description | Trade-offs |
|----------|-------------|------------|
| **Partitioned** | Each task is statically assigned to one core; each core is scheduled independently | Reuses single-core analysis; assignment is a bin-packing problem |
| **Global** | Tasks share a single ready queue and may migrate between cores | Better load balancing; migration overheads and harder analysis |
| **Semi-partitioned** | Most tasks are partitioned; a few are split across cores | Combines the benefits of both, at the cost of complexity |

!!! warning
    Single-core results do not carry over directly. For example, with global EDF or global RM, a task set with total utilisation only slightly above 1 can miss deadlines, no matter how many cores are available (the **Dhall effect**).

---

## Shared Hardware Resources

Cores on the same chip also contend for **shared caches, memory buses, and interconnects**. This interference can greatly increase execution times and must be bounded — for example through cache partitioning, memory bandwidth regulation, or interference-aware analysis.

!!! tip "Interactive Tutorial"
    Try the [**Diffusion Load Balancing Tutorial**](../tutorials/diffusion-algorithm.md) to see how load can be balanced across processing nodes.

---

## Next Steps

- Review single-core schedulability tests in [Real-Time Scheduling](../real-time-scheduling/introduction.md)
- See how tasks are assigned to processing elements in [Mapping](../hw-sw-codesign/mapping.md)
