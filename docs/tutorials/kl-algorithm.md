# KL Algorithm Interactive Tutorial

## Kernighan-Lin Algorithm — Interactive Case Study

This interactive tutorial lets you explore the **Kernighan-Lin (KL) graph partitioning algorithm** step by step.

!!! info "What you'll learn"
    - How D-values drive the algorithm's decisions
    - How swap gains are calculated
    - Why the algorithm uses a "lock and look-back" strategy
    - How multiple passes converge to a local optimum

---

## How to Use

**Explore mode:**

- **Drag** any node across the centre line to reassign it between SW and HW
- D-values and cut cost update live as you move nodes
- Toggle **"Show optimal swap"** to see the best available swap

**Algorithm mode:**

1. Click **Start KL Pass** to begin stepping through the algorithm
2. Click **Lock Next Pair** to process each swap candidate
3. After all pairs are locked, click **Apply Optimal Swaps** to commit the beneficial swaps
4. Repeat passes until convergence

**Other controls:**

- **Randomise** generates a random partition to experiment with
- **Reset** returns to the original configuration
- **Skip to end** fast-forwards through the current pass

---

## Interactive Tutorial

<a href="../embeds/kl-algorithm.html" target="_blank" rel="noopener" class="md-button">&#x2197; Open in new window</a>

<iframe src="../embeds/kl-algorithm.html" title="Interactive Kernighan–Lin graph partitioning tutorial" class="tutorial-frame" width="100%" height="1600" loading="lazy"></iframe>

---

## Key Observations

!!! example "Things to try"
    1. **Start with the default partition** and run a full KL pass. Notice how the algorithm identifies which nodes are "misplaced".
    2. **Randomise** the partition several times and observe how the cut cost varies.
    3. **Watch the cumulative gain** during a pass — it rises, peaks, then may decline. The algorithm applies only the prefix up to the peak.
    4. **Run multiple passes** — the first pass often makes the biggest improvement, but subsequent passes fine-tune the result.
    5. **Drag nodes manually** to create a bad partition, then let KL fix it.

---

## Related Material

- [HW/SW Co-Design Introduction](../hw-sw-codesign/introduction.md)
- [Partitioning Algorithms](../hw-sw-codesign/partitioning.md)
