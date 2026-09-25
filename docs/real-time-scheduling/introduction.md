# Introduction to Real-Time Scheduling

## What is Real-Time Scheduling?

In a real-time system, correctness depends not only on the result of a computation but also on **when** it is produced. **Real-time scheduling** decides the order in which tasks execute so that every task meets its deadline, and **schedulability analysis** proves this before the system runs.

---

## Hard and Soft Real-Time

- **Hard real-time** — missing a deadline is a system failure (e.g., airbag deployment, flight control)
- **Soft real-time** — missing a deadline degrades quality but is tolerable (e.g., video streaming)
- **Firm real-time** — late results are useless but occasional misses are tolerable

---

## Task Model

Each periodic or sporadic task $\tau_i$ is commonly described by:

| Parameter | Meaning |
|-----------|---------|
| $C_i$ | Worst-case execution time (WCET) |
| $T_i$ | Period, or minimum inter-arrival time |
| $D_i$ | Relative deadline |
| $U_i = C_i / T_i$ | Utilisation |

Deadlines are **implicit** if $D_i = T_i$, **constrained** if $D_i \le T_i$, and **arbitrary** otherwise. The total utilisation is $U = \sum_i U_i$.

---

## Scheduling Approaches

| Approach | Priority | Examples |
|----------|----------|----------|
| **Cyclic executive** | None — a fixed, precomputed timetable | Safety-critical avionics |
| **Fixed-priority** | Assigned per task, offline | Rate Monotonic (RM), Deadline Monotonic (DM) |
| **Dynamic-priority** | Assigned per job, at runtime | Earliest Deadline First (EDF) |

!!! info "Key Insight"
    RM is optimal among fixed-priority policies for implicit deadlines, and DM for constrained deadlines. EDF is optimal on a single processor: if any policy can meet all deadlines, EDF can.

---

## Schedulability Tests

**Utilisation bound for RM** (Liu & Layland): a set of $n$ implicit-deadline tasks is schedulable if

$$U \le n\left(2^{1/n} - 1\right)$$

This test is sufficient but not necessary — task sets above the bound may still be schedulable.

**Response-time analysis** for fixed-priority scheduling: the worst-case response time $R_i$ of task $\tau_i$ is the smallest solution of

$$R_i = C_i + \sum_{j \in hp(i)} \left\lceil \frac{R_i}{T_j} \right\rceil C_j$$

where $hp(i)$ is the set of higher-priority tasks. The task set is schedulable if $R_i \le D_i$ for all tasks.

**EDF**: implicit-deadline tasks are schedulable if and only if $U \le 1$. For constrained or arbitrary deadlines, exact tests such as Processor Demand Analysis (PDA) and QPA are used.

!!! tip "Interactive Tutorial"
    Try the [**PDA vs QPA Interactive Explorer**](../tutorials/pda-qpa.md) to compare two exact EDF schedulability tests on random task sets.

---

## Next Steps

- See how tasks sharing resources affects these tests in [Multicore and Resource Sharing](../multicore-resource-sharing/introduction.md)
- Review the kernel mechanisms that implement scheduling in [Real-Time Operating Systems](../rtos/introduction.md)
