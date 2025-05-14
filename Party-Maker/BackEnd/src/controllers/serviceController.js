// Controller do Service
import Service from "../models/Service.js";
const { ServiceModel } = Service;

const serviceController = {
    create: async (req, res) => {       // Função de criar novo Serviço
        try {
            
            const service = {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                image: req.body.image,
            };

            const response = await ServiceModel.create(service);
            res.status(201).json({response, msg: "Serviço criado com sucesso!"});

        } catch (error) { console.log(error) }
    },
    
    getAll: async (req, res) => {       // Busca todos os Serviços
        try {

            req;
            const services = await ServiceModel.find()
            res.json(services);

        } catch (error) {console.log(error)}
    },

    get: async (req,res) => {           // Busca um Serviço por Id
        try {
            
            const id = req.params.id;
            const service = await ServiceModel.findById(id);
            if(!service){res.status(404).json({msg: "Serviço não encontrado"}); return;}
            res.json(service);

        } catch (error) {console.log(error)}
    },

    delete: async (req,res) => {        // Deleta por Id
        try {
            
            const id = req.params.id;
            const service = await ServiceModel.findById(id);
            if(!service){res.status(404).json({msg: "Serviço não encontrado"}); return;}

            const deletedService = await ServiceModel.findByIdAndDelete(id);
            res.status(200).json({deletedService, msg: "Serviço excluído com sucesso"});

        } catch (error) {console.log(error)}
    },

    update: async (req,res) => {        // Atualiza Serviço por Id
        try {
            
            const id = req.params.id;
            const service = {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                image: req.body.image,
            };

            const updatedService = await ServiceModel.findByIdAndUpdate(id, service);
            if(!updatedService){res.status(404).json({msg: "Serviço não encontrado"}); return;}
            res.status(200).json({service, msg: "Serviço atualizado com sucesso"});

        } catch (error) {console.log(error)}
    }
};

export default serviceController;