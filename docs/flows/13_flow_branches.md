# Branches

There are two types of branches:

- **Branch one**: the branch will be executed if its condition is true, otherwise the default branch will be executed.
- **Branch all**: all the branches will be executed.

## Branch one

A branch one is a special type of step that allows you to execute a branch if a condition is true. If the condition is false, the default branch will be executed. Each branch is a flow.

Clicking on one branch will open the branch editor. You can configure the:

- **Predicate expression**: the expression that will be evaluated to determine if the branch should be executed.

![Branch one step](../assets/flows/flow_branch_one.png)

All the predicates can also be configured in the `Run one branch` step (parent box). The predicates are evaluated in the order they are defined. The first predicate that evaluates to true will be executed. If no predicate evaluates to true, the default branch will be executed.

## Branch all

A branch all is a special type of step that allows you to execute all the branches in parallel. Each branch is a flow.

Clicking on the parent box `Run all branches` will open the branches editor. You can configure for each branch:

- **Summary**: the summary of the branch.
- **Skip failure**: if set to `true`, the branch will be skipped if it fails.

You can also configure whether the branches should be run in parallel.

Clicking on one branch will open the branch editor. You can configure the:

- **Summary**: the summary of the branch.
- **Skip failure**: if set to `true`, the branch will be skipped if it fails.