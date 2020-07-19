const valor='global'

function minhafunção(){
    console.log(valor)
}

function exec(){
    const valor='local'
    console.log(valor)
    minhafunção()
}
exec()