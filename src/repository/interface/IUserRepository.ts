import { UserrolestatusAttributes } from "../../models/userrolestatus";
import { IAddUserRoleStatusRequest } from "../../useCases/interfaces/user/requestObjects/IAddUserRoleStatusRequest";
import { RoleAttributes } from "../../models/role";
import { IAddRoleRequest } from "../../useCases/interfaces/user/requestObjects/IAddRoleRequest";
import { UserAttributes } from "../../models/user";
import { IAddUserRequest } from "../../useCases/interfaces/user/requestObjects/IAddUserRequest";
import {
  UserroleAttributes,
  UserroleInputAttributes,
} from "../../models/userrole";
import { IAddUserRoleRequest } from "../../useCases/interfaces/user/requestObjects/IAddUserRoleRequest";
import { Model } from "sequelize";

export interface IUserRepository {
  findUserRoleStatusByStatusCode(
    statusCode: string,
  ): Promise<UserrolestatusAttributes | null>;

  findRoleByAuthority(authority: string): Promise<RoleAttributes | null>;

  findRolesByAuthorityList(
    authorityList: string[],
  ): Promise<RoleAttributes[] | null>;

  findRoleByAuthority(authority: string): Promise<RoleAttributes | null>;

  createUserRoleStatus(
    userRoleStatus: IAddUserRoleStatusRequest | undefined,
  ): Promise<UserrolestatusAttributes | null>;

  createRole(role: IAddRoleRequest | undefined): Promise<RoleAttributes | null>;

  findUserByUserName(userName: string): Promise<UserAttributes | null>;

  findUserById(id: number): Promise<UserAttributes | null>;

  createUser(user: IAddUserRequest | null): Promise<UserAttributes | null>;

  createUserRole(
    userroleInputAttributes: UserroleInputAttributes,
  ): Promise<UserroleAttributes | null>;

  findUserRoleByAllAttributes(
    userroleInputAttributes: UserroleInputAttributes,
  ): Promise<UserroleAttributes | null>;

  findAllUserRolesByUserID(userId: number): Promise<string[]>;
}
