const play = (video: HTMLVideoElement) => {
  void video.play().catch(() => {})
}

// Videos run muted and controlless, so hover/focus is the only play affordance.
export const hoverPlayHandlers = {
  onMouseEnter: (event: React.MouseEvent<HTMLVideoElement>) =>
    play(event.currentTarget),
  onMouseLeave: (event: React.MouseEvent<HTMLVideoElement>) =>
    event.currentTarget.pause(),
  onFocus: (event: React.FocusEvent<HTMLVideoElement>) =>
    play(event.currentTarget),
  onBlur: (event: React.FocusEvent<HTMLVideoElement>) =>
    event.currentTarget.pause(),
}
