import supabase from './supabase.mjs'


const getcost = async (grade) => {
  let { data: filament, error } = await supabase
    .from('studentinfo')
    .select()
    .eq('grade', grade)
    .single()
  if (error) {
    console.log('supabase error')
  }
  return filament.filament
}

const getcostarray = async () => {
  var costarraytoreturn = await [
    getcost(6),
    getcost(7),
    getcost(8),
    getcost(9),
    getcost(10),
    getcost(11),
    getcost(12)
  ]
  return costarraytoreturn
}


const getkey = async (grade) => {
  let { data: getkey, error } = await supabase
    .from('studentinfo')
    .select()
    .eq('grade', grade)
    .single()
  if (error) {
    console.log('supabase error')
  }
  return getkey.key
}

const getkeyarray = async() => {
  var keyarraytoreturn = await [
    await getkey(6),
    await getkey(7),
    await getkey(8),
    await getkey(9),
    await getkey(10),
    await getkey(11),
    await getkey(12)
  ]
  return keyarraytoreturn
}


var getinforeturn = {getcostarray, getkeyarray}
export default getinforeturn
