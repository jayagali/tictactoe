# USE URL: https://help.github.com/en/enterprise/2.13/user/articles/adding-a-file-to-a-repository-using-the-command-line

1. For a brand new repository follow the below steps:
- Create a Git repository
- Follow instructions in the "USE URL" above
- Last command should be altered to : $ git push --force origin {your-branch}

The above will upload your files to defined git repository.

2. If it is a repository with changes, you need to first pull, merge and then do a push. 

Example: 
You need to "fetch first." Use the command:

>git fetch origin master
Then follow these steps to merge:

>git pull origin master
>git add .
>git commit -m 'your commit message'
>git push origin master

# Use this link for other ways to resolve. 
https://stackoverflow.com/questions/28429819/rejected-master-master-fetch-first

