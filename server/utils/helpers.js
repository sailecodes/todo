export const isCreatorOrAdmin = (createdBy, userId, userRole) => {
  const isCreator = createdBy.toString() === userId;
  const isAdmin = userRole === "admin";

  return isCreator || isAdmin;
};
