import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { OK } from "../src/constants/error-code.constant";
import { ITodo } from "../src/interface/todo.interface";
import { deleteTodoById } from "../src/service/todo.service";

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  try {
    const todoId: string = req.params.id;
    const deletedTodo: ITodo = await deleteTodoById({
      _id: todoId,
    });
    return context.res?.status(OK).send(deletedTodo);
  } catch (error: any) {
    throw new Error(error);
  }
};

export default httpTrigger;
