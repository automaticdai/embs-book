# HW/SW Partitioning

## Overview

**Partitioning** is the process of dividing system functionality between hardware and software components. The goal is to find an assignment that optimises a given objective (e.g., minimise communication cost) while satisfying design constraints.

---

## Problem Formulation

The partitioning problem can be modelled as a **graph partitioning** problem:

- **Nodes** represent tasks or functional blocks
- **Edges** represent communication or data dependencies between tasks
- **Edge weights** represent the communication cost
- **Partitions** represent HW and SW assignments

The objective is typically to **minimise the cut cost** — the total weight of edges crossing the partition boundary (i.e., communication between HW and SW).

---

## Partitioning Algorithms

### Exact Methods

- **Exhaustive search**: Try all possible partitions. Guarantees optimality but has exponential complexity — $O(2^n)$ for $n$ nodes.
- **Integer Linear Programming (ILP)**: Formulate as an optimisation problem. Optimal but computationally expensive for large problems.

### Heuristic Methods

- **Greedy algorithms**: Make locally optimal choices at each step
- **Kernighan-Lin (KL) algorithm**: Iteratively swap pairs of nodes to reduce cut cost
- **Simulated annealing**: Probabilistic method that can escape local optima
- **Genetic algorithms**: Evolution-based search over the partition space

---

## The Kernighan-Lin Algorithm

The **Kernighan-Lin (KL) algorithm** is a classic heuristic for graph bi-partitioning. It works by iteratively finding pairs of nodes to swap between partitions to reduce the cut cost.

### Key Concepts

**D-value**: For each node $v$, the D-value measures how much the node "wants" to move:

$$D(v) = E(v) - I(v)$$

where:

- $E(v)$ = **external cost** — total weight of edges to nodes in the *other* partition
- $I(v)$ = **internal cost** — total weight of edges to nodes in the *same* partition

A positive D-value means the node has more connections to the other partition — it may benefit from being moved.

### Swap Gain

The gain from swapping nodes $a$ (in SW) and $b$ (in HW) is:

$$g(a, b) = D(a) + D(b) - 2 \cdot c(a, b)$$

where $c(a, b)$ is the edge weight between $a$ and $b$ (0 if no direct edge).

### Algorithm Steps

1. Compute D-values for all unlocked nodes
2. Find the pair $(a, b)$ with maximum gain $g(a, b)$
3. Lock $a$ and $b$ (they cannot be selected again in this pass)
4. Record the gain; tentatively swap $a$ and $b$
5. Repeat until all nodes are locked
6. Find the prefix of swaps with maximum cumulative gain
7. If the maximum cumulative gain > 0, apply those swaps and start a new pass
8. If no improvement is possible, the algorithm has **converged**

!!! tip "Interactive Tutorial"
    Try the [**KL Algorithm Interactive Tutorial**](../tutorials/kl-algorithm.md) to step through this algorithm visually and build your intuition!

---

## Complexity

- Each pass: $O(n^2 \log n)$ where $n$ is the number of nodes
- Typically converges in a small number of passes
- Does **not** guarantee a global optimum — result depends on the initial partition

---

## Summary

| Method | Optimality | Complexity | Practical Use |
|--------|-----------|------------|---------------|
| Exhaustive | Global | $O(2^n)$ | Small problems only |
| KL Algorithm | Local | $O(n^2 \log n)$ per pass | Medium-sized problems |
| Simulated Annealing | Near-global | Variable | Large problems |
| Genetic Algorithm | Near-global | Variable | Large problems |
