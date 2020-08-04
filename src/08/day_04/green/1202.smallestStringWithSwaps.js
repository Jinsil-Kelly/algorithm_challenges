//https://leetcode.com/problems/smallest-string-with-swaps/

const smallestStringWithSwaps = function(s, pairs) {
    let set = Array(s.length).fill(-1)
    function union(a, b) {//a,b
      let r1 = find(a)
      let r2 = find(b)
      if (r1 !== r2) {
        set[r2] = r1
      }
    }
    function find(a) {
      if (set[a] < 0) {
        return a
      } else {
        return (set[a] = find(set[a]))
      }
    }
    for (let p of pairs) {
      union(p[0], p[1])
    }
    let gs = []//making group
    for (let x = 0; x < s.length; x++) {
      gs[x] = []
    }
    for (let x = 0; x < s.length; x++) {
      gs[find(x)].push(x)
    }// find ==> push
    let sArr = s.split('')
    for (let x = 0; x < s.length; x++) {
      if (gs[x].length > 1) {
        let chars = gs[x].map(idx => s[idx])
        chars.sort()
        for (let k = 0; k < gs[x].length; k++) {
          sArr[gs[x][k]] = chars[k]
        }
      }
    }
    return sArr.join('')
  }