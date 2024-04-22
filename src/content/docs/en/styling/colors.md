---
title: Colors
---

<section class="page-colors">

  <details>
    <summary>
      <h2>
        Surface
        <span class="palette">
          <span class="surface-1"><small>A<span>a</span></small></span>
          <span class="surface-2"></span>
          <span class="surface-3"></span>
          <span class="surface-4"></span>
          <span class="surface-5"></span>
        </span>
      </h2>
    </summary>
    <p class="surface-1">--color-surface-1</p>
    <p class="surface-2">--color-surface-2</p>
    <p class="surface-3">--color-surface-3</p>
    <p class="surface-4">--color-surface-4</p>
    <p class="surface-5">--color-surface-5</p>
  </details>

  <details>
    <summary>
      <h2>
        Neutral
        <span class="palette">
          <span class="neutral-1">
            <small>
              A<span>a</span>
            </small>
          </span>
          <span class="neutral-2"></span>
          <span class="neutral-3"></span>
          <span class="neutral-4"></span>
          <span class="neutral-5"></span>
        </span>
      </h2>
    </summary>
    <p class="neutral-1">--color-neutral-1</p>
    <p class="neutral-2">--color-neutral-2</p>
    <p class="neutral-3">--color-neutral-3</p>
    <p class="neutral-4">--color-neutral-4</p>
    <p class="neutral-5">--color-neutral-5</p>
  </details>

  <details>
    <summary>
      <h2>
        Negative
        <span class="palette">
          <span class="negative-1">
            <small>
              A<span>a</span>
            </small>
          </span>
          <span class="negative-2"></span>
          <span class="negative-3"></span>
          <span class="negative-4"></span>
          <span class="negative-5"></span>
        </span>
      </h2>
    </summary>
    <p class="negative-1">--color-negative-1</p>
    <p class="negative-2">--color-negative-2</p>
    <p class="negative-3">--color-negative-3</p>
    <p class="negative-4">--color-negative-4</p>
    <p class="negative-5">--color-negative-5</p>
  </details>

  <details>
    <summary>
      <h2>
        Positive
        <span class="palette">
          <span class="positive-1">
            <small>
              A<span>a</span>
            </small>
          </span>
          <span class="positive-2"></span>
          <span class="positive-3"></span>
          <span class="positive-4"></span>
          <span class="positive-5"></span>
        </span>
      </h2>
    </summary>
    <p class="positive-1">--color-positive-1</p>
    <p class="positive-2">--color-positive-2</p>
    <p class="positive-3">--color-positive-3</p>
    <p class="positive-4">--color-positive-4</p>
    <p class="positive-5">--color-positive-5</p>
  </details>

  <details>
    <summary>
      <h2>
        Accent
        <span class="palette">
          <span class="accent-1">
            <small>
              A<span>a</span>
            </small>
          </span>
          <span class="accent-2"></span>
          <span class="accent-3"></span>
          <span class="accent-4"></span>
          <span class="accent-5"></span>
        </span>
      </h2>
    </summary>
    <p class="accent-1">--color-accent-1</p>
    <p class="accent-2">--color-accent-2</p>
    <p class="accent-3">--color-accent-3</p>
    <p class="accent-4">--color-accent-4</p>
    <p class="accent-5">--color-accent-5</p>
  </details>

</section>

<style>
.page-colors {
  & p {
    --color-border: color-mix(
      in oklab,
      var(--color),
      15% CanvasText
    );

    display: flex;
    align-items: center;
    column-gap: var(--column-gap-1);
    padding-block: calc(0.5 * var(--space-block-1));
  }

  & p::before {
    content: '';
    height: var(--line-height-1);
    aspect-ratio: var(--ratio-square);
    background-color: var(--color);
    border-radius: var(--border-radius-2);
    border: var(--border-1) solid var(--color-border);
  }

  & details > p:not(:last-child) {
    border-block-end: var(--border-1) solid var(--color-surface-2);
  }

  & h2 {
    margin-inline-end: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-grow: 1;

    & .palette {
      --space-multiplier: 0.35;

      display: flex;
      column-gap: var(--column-gap-1);
      padding-inline-end: var(--padding-inline-4);

      & > span {
        --color-border: color-mix(
          in oklab,
          var(--color),
          15% CanvasText
        );

        display: grid;
        place-content: center;

        background-color: var(--color);

        height: var(--line-height-1);
        aspect-ratio: var(--ratio-square);
        background-color: var(--color);
        border-radius: var(--border-radius-2);
        border: var(--border-1) solid var(--color-border);
        font-size: medium;
        font-weight: normal;
      }
    }
  }
}

  /* colors surface */

  .surface-1 {
    --color: var(--color-surface-1);
  }

  .surface-2 {
    --color: var(--color-surface-2);
  }

  .surface-3 {
    --color: var(--color-surface-3);
  }

  .surface-4 {
    --color: var(--color-surface-4);
  }

  .surface-5 {
    --color: var(--color-surface-5);
  }

  /* color neutral */

  .neutral-1 {
    --color: var(--color-neutral-1);
  }

  .neutral-2 {
    --color: var(--color-neutral-2);
  }

  .neutral-3 {
    --color: var(--color-neutral-3);
  }

  .neutral-4 {
    --color: var(--color-neutral-4);
  }

  .neutral-5 {
    --color: var(--color-neutral-5);
  }

  /* color positive */

  .positive-1 {
    --color: var(--color-positive-1);
  }

  .positive-2 {
    --color: var(--color-positive-2);
  }

  .positive-3 {
    --color: var(--color-positive-3);
  }

  .positive-4 {
    --color: var(--color-positive-4);
  }

  .positive-5 {
    --color: var(--color-positive-5);
  }

  /* color negative */

  .negative-1 {
    --color: var(--color-negative-1);
  }

  .negative-2 {
    --color: var(--color-negative-2);
  }

  .negative-3 {
    --color: var(--color-negative-3);
  }

  .negative-4 {
    --color: var(--color-negative-4);
  }

  .negative-5 {
    --color: var(--color-negative-5);
  }

  /* color accent */

  .accent-1 {
    --color: var(--color-accent-1);
  }

  .accent-2 {
    --color: var(--color-accent-2);
  }

  .accent-3 {
    --color: var(--color-accent-3);
  }

  .accent-4 {
    --color: var(--color-accent-4);
  }

  .accent-5 {
    --color: var(--color-accent-5);
  }

</style>
