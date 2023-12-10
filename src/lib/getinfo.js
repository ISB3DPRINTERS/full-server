import supabase from './supabase'


const getcost = async (grade) => {
  let { data: filament, error } = await supabase
    .from('filament')
    .select()
    .eq('grade', grade)
    .single()
  if (error) {
    console.log('supabase error')
  }
  return filament
}

const getcostarray = async () => {
  var costarraytoreturn = await {
    6: getcost(6),
    7: getcost(7),
    8: getcost(8),
    9: getcost(9),
    10: getcost(10),
    11: getcost(11),
    12: getcost(12)
  }
  return costarraytoreturn
}


const getkey = async (grade) => {
  let { data: getkey, error } = await supabase
    .from('key')
    .select()
    .eq('grade', grade)
    .single()
  if (error) {
    console.log('supabase error')
  }
  return getkey
}

const getkeyarray = async() => {
  var keyarraytoreturn = await {
    'g6': await getkey(6),
    'g7': await getkey(7),
    'g8': await getkey(8),
    'g9': await getkey(9),
    'g10': await getkey(10),
    'g11': await getkey(11),
    'g12': await getkey(12)
  }
  return keyarraytoreturn
}


var getinforeturn = {getcostarray, getkeyarray}
export default getinforeturn
