const getAcceleration = (obj) => {
  if (typeof obj.f && typeof obj.m === 'number') {
    return obj.f / obj.m
  } else if (typeof obj.Δv && typeof obj.Δt === 'number') {
    return obj.Δv / obj.Δt
   } else if (typeof obj.d && typeof obj.t === 'number') {
    return (2*obj.d) / obj.t ** 2
  }
  return 'impossible'
}