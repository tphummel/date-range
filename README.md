# date-range

generate a json array of iso-8601 date strings between a start and end date (inclusive).

### usage

```
npm i -g @tphummel/date-range

date-range 2018-01-01 2018-01-15
["2018-01-01","2018-01-02","2018-01-03","2018-01-04","2018-01-05","2018-01-06","2018-01-07","2018-01-08","2018-01-09","2018-01-10","2018-01-11","2018-01-12","2018-01-13","2018-01-14","2018-01-15"]
```

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
