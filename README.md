# date-range

generate a json array of iso-8601 date strings between a start and end date (inclusive).

[![Build Status](https://travis-ci.org/tphummel/date-range.svg?branch=master)](https://travis-ci.org/tphummel/date-range)

### setup

```
npm install --global @tphummel/date-range

```

### usage

```
date-range --help
...

date-range 2018-01-01 2018-01-15
["2018-01-01","2018-01-02","2018-01-03","2018-01-04","2018-01-05","2018-01-06","2018-01-07","2018-01-08","2018-01-09","2018-01-10","2018-01-11","2018-01-12","2018-01-13","2018-01-14","2018-01-15"]
```

### why?

When compiling a list of [streaks ](https://github.com/tphummel/streak) for a dataset, you sometimes need a complete run of dates in a time span. Especially when the underlying data is sparse, knowing all of the individual days in a range for outer join purposes can be helpful.

### extended example

```
brew install csvkit
brew install jq
npm i -g @tphummel/date-range

date-range 2018-01-01 2018-01-13 | jq -r '.[]' | csvjoin -H -c "2,1" --outer examples/sparse.csv - | csvcut -c 4,1,3 | csvsort -c 1 | csvlook

|         a2 | a          | c |
| ---------- | ---------- | - |
| 2018-01-01 | category 4 | 3 |
| 2018-01-02 | category 4 | 1 |
| 2018-01-03 |            |   |
| 2018-01-04 | category 4 | 0 |
| 2018-01-05 | category 4 | 1 |
| 2018-01-06 |            |   |
| 2018-01-07 |            |   |
| 2018-01-08 | category 4 | 1 |
| 2018-01-09 |            |   |
| 2018-01-10 | category 4 | 1 |
| 2018-01-11 |            |   |
| 2018-01-12 |            |   |
| 2018-01-13 |            |   |
```
