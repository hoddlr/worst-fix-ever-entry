# Worst Fix Ever: Funniest Commit Message

[![bounty](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722.svg)](https://make.fun/bounty/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)
[![rank](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/hoddlr/worst-fix-ever-entry/rank.svg)](https://make.fun/bounty/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)
[![reward](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/hoddlr/worst-fix-ever-entry/reward.svg)](https://make.fun/bounty/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)

A tiny deterministic program that writes a single commit message — a fix that somehow left things worse off — to `entry.txt`. No dates, no randomness, no outside input: every run produces the exact same bytes.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

The program reads `MAKEFUN_OUTPUT_DIR` (default `/output`), creates the directory when missing, and writes the one-line entry there.
