# DatabaseProject3

This is a database Project 3

### Redis Part-1 
```
The added items for redis is in [Business Requirement](./BusinessRequirement.pdf)
```

### Redis Part - 2
I will use a sorted list to show most important bugs.
* Key: mostPriority:{priorityID}
* Value1: JSON object for the pririty


### Redis Part - 3
In order for me to comeplete the above requirement, I will need to do the following:

- I will DELETE
    * DEL- DEL priorityID:1
    * Delete the data after every use, so you get accurate info.
- I will CREATE
    *  HMSET - HMSET priorityID:1 priorityName "Semi Important"
    * ZADD - ZADD bug_priority_cache "Low" 1
    * Add bugs to hash and then bug id to the sorted set
- I will READ
    * HGETALL - HGETALL bug:1

- I will update
    * HMSET - HMSET priorityID:1 status "In Progress"
    * Updates the bugs on the hash


