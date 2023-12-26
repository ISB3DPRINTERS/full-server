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
  var costarraytoreturn = [
    await getcost(6),
    await getcost(7),
    await getcost(8),
    await getcost(9),
    await getcost(10),
    await getcost(11),
    await getcost(12)
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
  return await getkey.key
}

const getkeyarray = async(e) => {
  var keyarraytoreturn = [
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
