var name = ["hole-in-one", "eagle", "bird", "par", "bogey", "double bogey", "go home"]

function golf(par, strokes) {
    if (strokes == 1) {
        return name[0]
    } else if (strokes <= par - 2) {
        return name[1]
    } else if (strokes = par - 1) {
        return name[2]
    } else if (strokes == par)
        return name[3]
    else if (strokes = par + 1)
        return name[4]
    else if (strokes = par + 2)
        return name[5]
    else
        return name[6]
}

console.log(golf(5, 4));
