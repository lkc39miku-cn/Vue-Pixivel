const localCache = {
    set(key: string, value: any) {
        window.localStorage.setItem(key, JSON.stringify(value))
    },
    get(key: string) {
        const res = window.localStorage.getItem(key)
        if (res !== null) return JSON.parse(res)
        console.warn(`warn local cache get ${key} is not string type`)
        return
    },
    removeItem(key: string) {
        window.localStorage.removeItem(key)
    },
    removeAll() {
        window.localStorage.clear()
    },
    getAll() {
        const array = []
        for (let i = 0; i < window.localStorage.length; i++) {
            const key = window.localStorage.key(i)
            if (key !== null) {
                const value = this.get(key)
                array[i] = {
                    'key': key,
                    'value': value
                }
            } else {
                array[i] = {
                    'key': `${key} error`,
                    'value': `local cache get ${key} is not string type`
                }
            }
        }
        return array
    },
    getLength() {
        return window.localStorage.length
    },
    getForIndex(index: number) {
        return window.localStorage.key(index)
    },
    getKeys() {
        const items = this.getAll()
        const keys = []
        for (let i = 0; i < items.length; i++) {
            keys.push(items[i].key)
        }
        return keys
    }
}

export default localCache