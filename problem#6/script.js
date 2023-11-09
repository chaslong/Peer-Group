
function expect(value) {
    let error = {
        output: "Error",
        result: "Not Equal",
    }
    let success = {
        output: value,
        result: "True",
    }

    return {
        toBe: function (val) {
            if (value === val) {
                return success
            } else {
                return error
            }
        },

        notToBe: function (val) {
            if (val !== value) {
                return success
            } else {
                return error
            }
        }
    };

}

console.log(expect(5).toBe(5))
console.log(expect(5).toBe("word"))
console.log(expect(5).notToBe(null))
