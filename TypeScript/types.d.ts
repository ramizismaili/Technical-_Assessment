// Enum representing the available domains for junior employees.
enum Domain {
  Web = "Web",
  Connect = "Connect",
  Backend = "Backend",
}

// Interface representing an intern employee.
interface Intern {
  name: string; // The name of the intern.
  age: number; // The age of the intern.
  skills: string[]; // An array of strings representing the skills of the intern.
}

// Interface representing a junior employee.
interface Junior {
  name: string; // The name of the junior employee.
  age: number; // The age of the junior employee.
  skills: string[]; // An array of strings representing the skills of the junior employee.
  date_of_promotion: Date; // The date that the junior employee was promoted to their current position.
  domain: Domain; // The domain of expertise for the junior employee.
}

// Interface representing a company object.
interface Company {
  Interns: Intern[]; // An array of intern employees.
  Juniors: Junior[]; // An array of junior employees.
  Country: string; // The country in which the company is located.
}

export default Company;
