while (notDone()) {
    if (isPathRight()) {
        turnRight();
    }
    if (isPathForward()) {
        moveForward();
    } else {
        if (isPathLeft()) {
            turnLeft();
        } else {
            turnRight();
        }
    }
}

function notDone() {
    return false;
}

function isPathRight() {
    return false;
}

function isPathForward() {
    return false;
}

function isPathLeft() {
    return false;
}

function moveForward() {

}

function turnRight() {

}

function turnLeft() {

}
