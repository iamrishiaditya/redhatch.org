// Licence CC BY-NC-SA 4.0
// Attribution — You must give appropriate credit.
// Non Commercial — You may not use the material for commercial purposes.

import TunnelComponent from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.30/build/backgrounds/tunnel1.min.js'

const app = TunnelComponent(document.getElementById('canvas'), {})

app.tunnel.setColors(['#dda474', '#d54803', '#cc539c', '#c41f10', '#eb2d0e'])
app.tunnel.uniforms.uNoiseScaleX.value = 2.0
app.tunnel.uniforms.uNoiseTresholds.value[0] = 1 - 0.496041406596456
app.tunnel.uniforms.uNoiseTresholds.value[1] = 1 - 0.17835484130314838
app.tunnel.uniforms.uNoiseTresholds.value[2] = 1 - 0.40281655839303965
app.tunnel.uniforms.uNoiseTresholds.value[3] = 1 - 0.4460903073277931
app.tunnel.uniforms.uNoiseTresholds.value[4] = 1 - 0.47434758220851125

document.body.addEventListener('click', () => {
  app.tunnel.setColors([
    0xffffff * Math.random(), 
    0xffffff * Math.random(), 
    0xffffff * Math.random(), 
    0xffffff * Math.random(), 
    0xffffff * Math.random()
  ])
  const uNoiseTresholds = app.tunnel.uniforms.uNoiseTresholds.value
  uNoiseTresholds.forEach((v, i) => {
    uNoiseTresholds[i] = 0.5 + Math.random() * 0.5
  })
})