setsize = 25
range = 100
unsorted = true

function GenerateRandom(range){
    return Math.floor(Math.random()*range)
}

function ShuffleArray(array){
    for (let i = array.length - 1; i > 0; i--){
        const j = GenerateRandom(i)
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp 
    }
}

set = []

for (i = 0; i < setsize; i++){
    set.push(GenerateRandom(range))
}


while (unsorted){

    unsorted = true
    console.log('Current Ordered Set: '  + set)

    for (i = 0; i < set.length; i++){
        if (set[i] < set[i+1] ) {
            unsorted = true
            ShuffleArray(set)
            break
        }

        if (set[i] >= set[i + 1]) { 
            unsorted = false 
        }
    }
}


console.log('Final sorted bogoset is: ' + set)