// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract TodoList {
    struct Task {
        string content;
        bool completed;
    }

    Task[] public tasks;

    function addTask(string memory _content) public {
        tasks.push(Task(_content, false));
    }

    function completeTask(uint _index) public {
        require(_index < tasks.length, "Invalid task index");
        tasks[_index].completed = true;
    }

    function getTasks() public view returns (Task[] memory) {
        return tasks;
    }
}
