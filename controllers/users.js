import User from "../models/User.js";

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    }catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }

};

export const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id)

        if (user) {
            return res.json(user);
        }
        res.status(404).json({ message: "User not found!"});
    }   catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

export const createUser = async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  };
  
  export const updateUser = async (req, res) => {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, req.body);
    res.status(201).json(user);
  };
  
  export const deleteUser = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await House.findByIdAndDelete(id);
  
      if (deleted) {
        return res.status(200).send("User deleted!");
      }
  
      throw new Error("User not found!");
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  };



