import { AppDataSource } from "./data-source"
import { Account } from "./entity/account.entity"
// import { User } from "./entity/User"

AppDataSource.initialize().then(async () => {
    /*
    console.log("Inserting a new user into the database...")
    const user = new User()
    user.firstName = "Timber"
    user.lastName = "Saw"
    user.age = 25
    await AppDataSource.manager.save(user)
    console.log("Saved a new user with id: " + user.id)

    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(User)
    console.log("Loaded users: ", users)

    console.log("Here you can setup and run express / fastify / any other framework.")
    */

    console.log("Inserting a new account into the database...");
    const account = new Account();
    account.name = 'Ichaniawaty Cendolwati';
    account.email = 'ichaniawaty.cendolwati';
    await AppDataSource.manager.save(account);
    console.log("Saved a new user with id: " + account.id);

    console.log("Loading users from the database...");
    const accounts = await AppDataSource.manager.find(Account);
    console.log("Loaded users: ", accounts);


}).catch(error => console.log(error));
