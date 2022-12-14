export const state = () => ({
    name: 'Guest',
    overlay: false,
    camera: null,
    audio: null
  })

  export const mutations = {
    setName (state, payload) {
      state.name = payload.name
    },
    setOverlay (state, payload) {
      state.overlay = payload.overlay
    },
    setCamera (state, payload) {
      state.camera = payload.camera
    },
    setAudio (state, payload) {
      state.audio = payload.audio
    }
  }
  