import { Controller } from "./Controller";
import { Request, Response } from "express";
import { User } from "../models/User";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";

// -----------------------------------------------------------------------------

export class UserController implements Controller {
   async getAll(req: Request, res: Response): Promise<void | Response<any>> {
      try {
         const allUsers = await User.find();
         res.status(200).json(allUsers);
      } catch (error) {
         res.status(500).json({
            message: "Error while getting users",
         });
      }
   }

   async getById(req: Request, res: Response): Promise<void | Response<any>> {
      try {
         const id = +req.params.id;

         const user = await User.findOneBy({
            id: id,
         });

         if (!user) {
            return res.status(404).json({
               message: "User not found",
            });
         }

         res.status(200).json(user);
      } catch (error) {
         res.status(500).json({
            message: "Error while getting user",
         });
      }
   }
}
