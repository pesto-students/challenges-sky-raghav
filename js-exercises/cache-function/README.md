# Instructions

`cache-function` should return a function that invokes `cb`.

If the returned function is invoked with arguments that it has already seen
then it should return the cached result and not invoke `cb` again.

`cb` should only ever be invoked once for a given set of arguments.

# Requirements

### **What are some good real-life use cases for such a function?**

This type of cache function can be used to store some user info when a user login into the system,
so if he/she needs that information again then there is no need to call the database for that information.
We can get it from the cache(i.e. sessions).

Caching can be used even to cache web pages(i.e. server side rendering).

API authentication token can be cached for faster validation.

### **What *extra* test cases can you add to the test file?**

*Add relevant test-cases in the test file*
