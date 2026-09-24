# Diffusion Load Balancing Interactive Tutorial

## Diffusion Algorithm — Interactive Case Study

This interactive tutorial lets you step through the **diffusion algorithm** for dynamic load balancing, where each node repeatedly exchanges load with its neighbours until the system is balanced.

!!! info "What you'll learn"
    - How each node's load changes based only on its neighbours
    - How the diffusion coefficient $\alpha$ is chosen
    - Why total load is conserved at every step
    - How the imbalance shrinks towards zero over successive steps

---

## How It Works

At each step, every edge $(u, v)$ carries a flow proportional to the load difference across it:

$$f_{uv} = \alpha \cdot (L_u - L_v)$$

Load moves from the more loaded node to the less loaded one, so each node's new load is:

$$L_u' = L_u - \sum_{v \in N(u)} \alpha \cdot (L_u - L_v)$$

This tutorial uses $\alpha = \frac{1}{\deg_{\max} + 1}$, where $\deg_{\max}$ is the highest node degree in the graph. This choice keeps the iteration stable, so loads never overshoot.

---

## How to Use

- **Next ▶** / **◀ Prev** step forwards and backwards through the iterations
- **▷ Auto** plays the steps automatically
- **↺ Reset** returns to the initial loads
- **Randomize graph** generates a new graph with random loads
- **Drag** nodes to rearrange the layout

Edge labels and arrows show how much load flows along each edge, and in which direction. The σ bar tracks the standard deviation of the loads (0 means perfectly balanced).

---

## Interactive Tutorial

<a href="../../diffusion_algorithm_tutorial.html" target="_blank" rel="noopener" class="md-button">&#x2197; Open in new window</a>

<iframe src="../../diffusion_algorithm_tutorial.html" title="Interactive diffusion load balancing tutorial" class="tutorial-frame" width="100%" height="520" loading="lazy"></iframe>

---

## Key Observations

!!! example "Things to try"
    1. **Step through the default graph** and check that the total load stays the same after every step.
    2. **Watch the largest flow** — early steps move the most load; later steps make small corrections.
    3. **Randomize** several graphs and compare how many steps each needs. Well-connected graphs usually balance faster.
    4. **Look at α** — a graph with one high-degree node forces a small α, which slows convergence everywhere.

---

## Related Material

- [Mapping](../hw-sw-codesign/mapping.md) — dynamic mapping and load balancing
- [Design Space Exploration](../hw-sw-codesign/design-space-exploration.md)
