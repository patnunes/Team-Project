from sys import platform, executable
import ctypes
from subprocess import Popen, PIPE


def main():

    if(platform == "win32"):
        if(not is_admin()):
            return

    list_cmd = ["ls"] if (platform != "win32") else ["rmdir"]
    del_cmd = ["rm"] if (platform != "win32") else ["del"]

    stat = run_cmd(list_cmd)
    if(stat.find("static") >= 0):
        print("static link found, deleting")
        stat = run_cmd(del_cmd, ["static"])
    else:
        print("static link not found")

    stat = run_cmd(list_cmd)
    if(stat.find("templates") >= 0):
        print("templates found, deleting")
        stat = run_cmd(del_cmd, ["templates"])
    else:
        print("templates not found")

        create(platform)

def create(os):
    if(os != "win32"):
        print("creating links for linux")
        run_cmd(["ln", "-s", "../../Frontend/src/static"])
        run_cmd(["ln", "-s", "../../Frontend/src/", "templates"])

    elif(os == "win32"):
            print("creating links for windows")
            # the following will get rid of the legacy linux symlink if it exists
            check = run_cmd(["del", "static"])
            stat = run_cmd(["mklink", "/D", "static", "..\\..\\Frontend\\src\\static"])
            stat = run_cmd(["mklink", "/D", "templates", "..\\..\\Frontend\\src"])


def run_cmd(cmd, param=[""], dir="."):
    cmd_app = cmd if (param==[""]) else cmd + param
    proc = Popen(cmd_app, cwd=dir, stdout=PIPE, stderr=PIPE, shell=True)
    stdout, stderr = proc.communicate(timeout=5)
    return str(stdout)


def is_admin():
    if(not ctypes.windll.shell32.IsUserAnAdmin()):
        ctypes.windll.shell32.ShellExecuteW(None, "runas", executable, __file__, None, 1)
        return 0
    else:
        return 1

main()
