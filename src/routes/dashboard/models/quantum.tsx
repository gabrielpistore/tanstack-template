import { DashboardLayout } from "@/components/layouts/dashboard-layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { createFileRoute } from "@tanstack/react-router";
import { Activity, Atom, Play, Settings, TrendingUp, Zap } from "lucide-react";

export const Route = createFileRoute("/dashboard/models/quantum")({
  component: QuantumModelPage,
});

function QuantumModelPage() {
  const breadcrumbs = [
    { title: "Platform", href: "/" },
    { title: "Models", href: "/dashboard/models" },
    { title: "Quantum" },
  ];

  return (
    <DashboardLayout breadcrumbs={breadcrumbs}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="flex items-center gap-2 text-3xl font-bold tracking-tight">
              <Atom className="h-8 w-8 text-purple-500" />
              Quantum Model
            </h1>
            <p className="text-muted-foreground">
              Next-generation quantum-inspired AI model for complex problem
              solving.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline">
              <Settings className="mr-2 h-4 w-4" />
              Configure
            </Button>
            <Button>
              <Play className="mr-2 h-4 w-4" />
              Run Simulation
            </Button>
          </div>
        </div>

        {/* Model Status */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Quantum State
              </CardTitle>
              <Activity className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 animate-pulse rounded-full bg-purple-500"></div>
                <span className="text-lg font-bold">Active</span>
              </div>
              <p className="text-muted-foreground text-xs">
                Quantum coherence maintained
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Qubits Active
              </CardTitle>
              <Atom className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">512</div>
              <p className="text-muted-foreground text-xs">
                <Badge variant="secondary" className="text-xs">
                  98.7%
                </Badge>{" "}
                fidelity
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Success Rate
              </CardTitle>
              <Zap className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">94.8%</div>
              <p className="text-muted-foreground text-xs">
                <Badge variant="secondary" className="text-xs">
                  +1.2%
                </Badge>{" "}
                improvement
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Optimization
              </CardTitle>
              <TrendingUp className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">97.3%</div>
              <p className="text-muted-foreground text-xs">
                <Badge variant="secondary" className="text-xs">
                  +2.8%
                </Badge>{" "}
                this week
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Quantum Capabilities */}
        <Card>
          <CardHeader>
            <CardTitle>Quantum Capabilities</CardTitle>
            <CardDescription>
              Advanced quantum-inspired features and algorithms
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  name: "Quantum Optimization",
                  level: 98,
                  color: "bg-purple-500",
                },
                {
                  name: "Superposition Processing",
                  level: 95,
                  color: "bg-blue-500",
                },
                {
                  name: "Entanglement Analysis",
                  level: 92,
                  color: "bg-green-500",
                },
                {
                  name: "Quantum Annealing",
                  level: 89,
                  color: "bg-orange-500",
                },
              ].map((capability) => (
                <div key={capability.name}>
                  <div className="mb-1 flex justify-between">
                    <span className="text-sm font-medium">
                      {capability.name}
                    </span>
                    <span className="text-muted-foreground text-sm">
                      {capability.level}%
                    </span>
                  </div>
                  <div className="bg-secondary h-2 w-full rounded-full">
                    <div
                      className={`${capability.color} h-2 rounded-full transition-all`}
                      style={{ width: `${capability.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quantum Capabilities */}
        <Card>
          <CardHeader>
            <CardTitle>Technical Specifications</CardTitle>
            <CardDescription>
              Quantum model configuration and parameters
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Version:</span>
                <span className="font-medium">v2.1.0-quantum</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Architecture:</span>
                <span className="font-medium">Quantum-Classical Hybrid</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Qubits:</span>
                <span className="font-medium">512 logical</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Gate Fidelity:</span>
                <span className="font-medium">99.9%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Coherence Time:</span>
                <span className="font-medium">100μs</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Status:</span>
                <Badge variant="secondary">Experimental</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Quantum Computations */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Quantum Computations</CardTitle>
            <CardDescription>
              Latest quantum algorithm executions and optimizations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  id: "1",
                  algorithm: "Quantum Portfolio Optimization",
                  type: "QAOA",
                  status: "Completed",
                  qubits: 256,
                  fidelity: "99.2%",
                  runtime: "45.2s",
                  timestamp: "3 min ago",
                },
                {
                  id: "2",
                  algorithm: "Molecular Simulation",
                  type: "VQE",
                  status: "Running",
                  qubits: 128,
                  fidelity: "98.8%",
                  runtime: "120.5s",
                  timestamp: "8 min ago",
                },
                {
                  id: "3",
                  algorithm: "Cryptographic Analysis",
                  type: "Shor's Algorithm",
                  status: "Completed",
                  qubits: 64,
                  fidelity: "97.5%",
                  runtime: "28.1s",
                  timestamp: "15 min ago",
                },
                {
                  id: "4",
                  algorithm: "Machine Learning Training",
                  type: "QSVM",
                  status: "Failed",
                  qubits: 512,
                  fidelity: "94.1%",
                  runtime: "89.7s",
                  timestamp: "22 min ago",
                },
              ].map((computation) => (
                <div
                  key={computation.id}
                  className="flex items-center justify-between rounded-lg border p-4"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10">
                      <Atom className="h-5 w-5 text-purple-500" />
                    </div>
                    <div>
                      <p className="font-medium">{computation.algorithm}</p>
                      <div className="text-muted-foreground flex items-center space-x-4 text-sm">
                        <span>{computation.type}</span>
                        <span>•</span>
                        <span>{computation.qubits} qubits</span>
                        <span>•</span>
                        <span>{computation.fidelity} fidelity</span>
                        <span>•</span>
                        <span>{computation.runtime}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge
                      variant={
                        computation.status === "Completed"
                          ? "secondary"
                          : computation.status === "Running"
                            ? "default"
                            : "destructive"
                      }
                    >
                      {computation.status}
                    </Badge>
                    <span className="text-muted-foreground text-sm">
                      {computation.timestamp}
                    </span>
                    <Button variant="ghost" size="sm">
                      View Circuit
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quantum Algorithms */}
        <Card>
          <CardHeader>
            <CardTitle>Available Quantum Algorithms</CardTitle>
            <CardDescription>
              Pre-configured quantum algorithms ready for execution
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "QAOA",
                  fullName: "Quantum Approximate Optimization Algorithm",
                  description: "Combinatorial optimization problems",
                  complexity: "Medium",
                  qubits: "16-512",
                },
                {
                  name: "VQE",
                  fullName: "Variational Quantum Eigensolver",
                  description: "Molecular and material simulations",
                  complexity: "High",
                  qubits: "8-256",
                },
                {
                  name: "Grover's",
                  fullName: "Grover's Search Algorithm",
                  description: "Unstructured database search",
                  complexity: "Low",
                  qubits: "4-64",
                },
                {
                  name: "Shor's",
                  fullName: "Shor's Factoring Algorithm",
                  description: "Integer factorization",
                  complexity: "High",
                  qubits: "32-128",
                },
                {
                  name: "QSVM",
                  fullName: "Quantum Support Vector Machine",
                  description: "Quantum machine learning",
                  complexity: "Medium",
                  qubits: "16-256",
                },
                {
                  name: "QFT",
                  fullName: "Quantum Fourier Transform",
                  description: "Frequency domain analysis",
                  complexity: "Low",
                  qubits: "8-128",
                },
              ].map((algorithm) => (
                <Card
                  key={algorithm.name}
                  className="cursor-pointer transition-shadow hover:shadow-md"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">
                        {algorithm.name}
                      </CardTitle>
                      <Badge
                        variant={
                          algorithm.complexity === "Low"
                            ? "secondary"
                            : algorithm.complexity === "Medium"
                              ? "default"
                              : "destructive"
                        }
                      >
                        {algorithm.complexity}
                      </Badge>
                    </div>
                    <CardDescription className="font-medium">
                      {algorithm.fullName}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-3 text-sm">
                      {algorithm.description}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">
                        Qubits: {algorithm.qubits}
                      </span>
                      <Button size="sm" variant="outline">
                        <Play className="mr-2 h-3 w-3" />
                        Run
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quantum Insights */}
        <Card>
          <CardHeader>
            <CardTitle>Quantum Performance Insights</CardTitle>
            <CardDescription>
              Analysis and optimization recommendations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-4">
                <h4 className="font-medium">Quantum Advantages</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                    <span className="text-sm">
                      Exponential speedup for optimization
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                    <span className="text-sm">
                      Superior parallel processing capabilities
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                    <span className="text-sm">
                      Natural handling of probabilistic problems
                    </span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-medium">Current Limitations</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                    <span className="text-sm">
                      Decoherence limits computation time
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                    <span className="text-sm">
                      Gate errors affect large circuits
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                    <span className="text-sm">
                      Requires specialized error correction
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
