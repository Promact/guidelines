---
layout: default
permalink: /mysql/
---


- Indexes speed up retrievals but slow down inserts and deletes, as well as updates of values in indexed columns. That is, indexes slow down most operations that involve writing. This occurs because writing a row requires writing not only the data row, it requires changes to any indexes as well. The more indexes a table has, the more changes need to be made, and the greater the average performance degradation. Most tables receive many reads and few writes, but for a table with a high percentage of writes, the cost of index updating might be significant.

- If you don’t need a particular index to help queries perform better, don’t create it.

- An index takes up disk space, and multiple indexes take up correspondingly more space. This might cause you to reach a table size limit more quickly than if there are no indexes. Avoid indexes wherever possible.

**Compound Indices**

You can create compound indices - an index that includes multiple columns. MySQL can use these from left to right. So if you have table as follow:

|Students|
|:-:     |
|Id      |
|Name    |
|Branch  |
|Age     |
|Gender  |


if you have a compound index that includes Name/Branch/Age in that order, these WHERE clauses would use the index:
```sql
WHERE Name='studentA' and Branch='CSE'
```
```sql
WHERE Name='studentA' and Branch='CSE' and Age > 18
```
but

```sql
WHERE Branch='CSE' and Age > 18
```
would not use that index because everything has to be used from left to right.



