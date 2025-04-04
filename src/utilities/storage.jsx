

const storage = localStorage


export function getItem  (key) {
    return storage.getItem(key)
}


export function setItem (key, value) {
    return storage.setItem(key, value)
}

export function removeItem (key) {
    return storage.removeItem(key)
}

export function clear () {
    return storage.clear()
}

export default storage