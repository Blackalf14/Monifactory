ServerEvents.recipes(event => {

    ////// Machine Recipe //////

    event.shaped(
        'gtceu:simulation_supercomputer',
        ['AWA',
            'ASA',
            'WAW'],
        {
            A: '#gtceu:circuits/mv',
            W: 'gtceu:copper_single_cable',
            S: 'gtceu:solid_machine_casing'
        }
    ).id('kubejs:shaped/simulation_supercomputer')


    ////// Greenhouse Recipes //////

            event.recipes.gtceu.simulation_supercomputer('kubejs:enderman')
                .notConsumable(Item.of('hostilenetworks:data_model', '{data_model:{data:6,id:"hostilenetworks:enderman"}}'))
                .itemInput('hostilenetworks:prediction_matrix')
                .chancedOutput(Item.of('hostilenetworks:prediction', '{data_model:{id:"hostilenetworks:enderman"}}'))
                .Output(Item.of("hostilenetworks:prediction_enderman_prediction"))
                .duration(512)
                .EUt(10)
})