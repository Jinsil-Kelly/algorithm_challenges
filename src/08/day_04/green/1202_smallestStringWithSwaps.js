// https://leetcode.com/problems/smallest-string-with-swaps/

 const smallestStringWithSwaps = (s, pairs) => {
  const m = new Map();
  const find = (z) => {
      if (!m.has(z)) {
          m.set(z, z);
      } else {
          while (m.get(z) !== z) {
              m.set(z, m.get(m.get(z))) ;
          }
      }
      return z;
  };
  const union = (a,b) => {
      const x = find(a);
      const y = find(b);
      m.set(x, y);
        union(x[a],y[b]);
  };
  const map = new Map();
  Array.from(m.keys()).forEach(k => {
      const ki = find(k);
      if (map.has(k)) {
          const val = map.get(ki);
          val.push(s[k]);
          map.set(ki, val);
      } else {
          map.set(ki, [s[k]]);
      }
  });
  const val = []
  Array.from(map.keys()).forEach(k => {
      map.get(k);
      map.sort(k);
      map.set(k, val);
  });
  for (const i = 0; i < s.length;) {
      const k = find(i);
      if (map.has(k)) {
          const vals = map.get(k);
          vals.shift();
          map.set(k, vals);
          const settings = s.substring(0, i) + val + s.substring(i + 1);
      }
  }
}
