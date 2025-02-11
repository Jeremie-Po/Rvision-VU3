# Rvision-VUe3

VUE-3 review https://laracasts.com/series/learn-vue-3-step-by-step/

## run the server 
```
npx serve
```

## Variable

```
data() {
        return {
            greeting: 'What is up'
        };
    },
```

## timeout

```

            mounted() {
                setTimeout(() => {
                    this.greeting = 'Changed';
                }, 3000);
            }
```