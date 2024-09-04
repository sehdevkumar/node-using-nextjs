import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const repoUrl = "https://github.com/sehdevkumar/mark-down-blog.git";
const cloneDir = path.join(process.cwd(), 'content');

export const cloneOrUpdateRepo = () => {
  if (fs.existsSync(cloneDir)) {
    // If the content directory already exists, pull the latest changes
    try {
      execSync(`git -C ${cloneDir} pull`, { stdio: 'inherit' });
      console.log('Repository updated successfully.');
      
      execSync(`cd ${cloneDir}`);
      console.log("Change Directory", cloneDir);
      try{
        console.log("Move the Images");
        execSync(`mv  ${cloneDir}/images public/`);

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      }catch(e) {
          console.log("No such File or Directory")
      }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      console.error('Failed to update the repository:');
    }
  } else {
    // If the content directory does not exist, clone the repository
    try {
      execSync(`git clone ${repoUrl} ${cloneDir}`, { stdio: 'inherit' });
      console.log('Repository cloned successfully.');
    } catch (error) {
      console.error('Failed to clone the repository:', error);
    }
  }
};
