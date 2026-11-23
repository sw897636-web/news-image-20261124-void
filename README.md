# The World in One Day — Tuesday 24 November 2026

[![make.fun · news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/sw897636-web/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/sw897636-web/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)

A single 1024×1024 infographic summing up the world's news of **Tuesday 24 November 2026** — an entry for the [make.fun bounty](https://make.fun/bounty/news-image-20261124).

## The eight stories

| # | Headline | Fact |
|---|----------|------|
| 1 | UKRAINE SINKS WARSHIP | Ukraine confirms Monday sinking off Benghazi — Libya |
| 2 | HUANG RETURNS AS CEO | Nvidia reinstates Huang as CEO Monday — USA |
| 3 | IRAN STRIKES US BASES | Iran resumes strikes on Gulf US bases — Middle East |
| 4 | UN: AI SAFETY DEAL | UN chief seeks AI safety pact within a year — Global |
| 5 | BELGIUM STRIKES | National strike halts airports and transport — Belgium |
| 6 | CONCERT EVACUATION | Sunday night: 12,000 leave Manchester show — UK |
| 7 | UK HOSTS 2035 CUP | FIFA confirms UK hosts 2035 Women's World Cup — Sport |
| 8 | CRYPTO MARKETS | BTC $61,077, ETH $1,713.61, Tuesday Asia morning — Markets |

Every fact was verified against reporting published on 23–24 November 2026 (BBC, France 24, Al Jazeera, CoinGecko). Time-sensitive items carry their qualifier in the image ("Monday", "Sunday night", "Tuesday Asia morning") so nothing from 23 November is presented as happening on Tuesday 24 November. No news photographs are used; all artwork is original flat-vector illustration.

## How it runs

`main.ts` (Node 22, standard library only) copies the pre-rendered `entry.png` to `/output/entry.png` (or `$MAKEFUN_OUTPUT_DIR/entry.png`). The copy is deterministic: both runs write identical bytes.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
