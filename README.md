# Ethereum To-Do List DApp

A simple decentralized to-do list application running on the Ethereum blockchain. Built with Scaffold-ETH 2.

## Description

This is a simple decentralized application (DApp) that allows users to create and manage a to-do list. The list is stored on the Ethereum blockchain, making it censorship-resistant and always available.

## Tech Stack

- [NextJS](https://nextjs.org/)
- [RainbowKit](https://www.rainbowkit.com/)
- [Hardhat](https://hardhat.org/)
- [Wagmi](https://wagmi.sh/)
- [Viem](https://viem.sh/)
- [TypeScript](https://www.typescriptlang.org/)

## Features

- Create a new task.
- View all your tasks.
- Mark a task as completed.
- See the total number of tasks.

## Getting Started

### Prerequisites

Before you begin, you need to install the following tools:

- [Node (>= v20.18.3)](https://nodejs.org/en/download/)
- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))
- [Git](https://git-scm.com/downloads)

### Installation

1.  Clone the repo:
    ```sh
    git clone <YOUR_REPO_URL>
    ```
2.  Navigate to the project directory:
    ```sh
    cd eth-todo
    ```
3.  Install dependencies:
    ```sh
    yarn install
    ```

## Usage

1.  **Start a local network:**
    In a new terminal, run:
    ```sh
    yarn chain
    ```
    This will start a local Hardhat network.

2.  **Deploy the smart contract:**
    In a second terminal, run:
    ```sh
    yarn deploy
    ```
    This will deploy the `TodoList` contract to the local network.

3.  **Start the frontend:**
    In a third terminal, run:
    ```sh
    yarn start
    ```
    This will start the Next.js development server. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

The project is a monorepo with two main packages:

-   `packages/hardhat`: Contains the smart contract code, deployment scripts, and tests.
-   `packages/nextjs`: Contains the frontend Next.js application.

## Contributing

Contributions are welcome! Please see the [CONTRIBUTING.md](CONTRIBUTING.md) file for more information.

## License

This project is licensed under the [MIT License](LICENCE).
