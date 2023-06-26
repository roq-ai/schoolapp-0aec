const mapping: Record<string, string> = {
  renamedclasses: 'Renamedclass',
  parents: 'parent',
  schools: 'school',
  students: 'student',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
