import json
import subprocess
from sys import platform

# https://stackoverflow.com/questions/55104057/how-to-remove-redundant-unused-dependencies-from-package-json

DIVIDER = "=================================="
USE_SHELL = platform == "win32"


def run_command(cmd, capture_output=True):
    process = subprocess.Popen(
        cmd, shell=USE_SHELL, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
    stdout, stderr = process.communicate()
    if capture_output:
        return stdout.strip()
    return None


def main():
    print("\nFinding unused dependencies")
    print(DIVIDER)

    cmd = ["npx", "depcheck", "--json"]
    depcheck_result = run_command(cmd)
    unused_dependencies = json.loads(depcheck_result)["dependencies"]

    if unused_dependencies:
        print(f"Found these unused dependencies\n{DIVIDER}")
        print(*unused_dependencies, sep="\n")

        affirmative_responses = {"y", "yes", ""}
        response = input(f"{DIVIDER}\n\nRemove all? [yes] ").lower(
        ) in affirmative_responses

        if response:
            cmd = ["yarn", "remove", *unused_dependencies]
            run_command(cmd, capture_output=False)

        print(f"\nDone!\n{DIVIDER}\n")
    else:
        print(f"\nDone! - No unused dependencies found.\n{DIVIDER}\n")


if __name__ == "__main__":
    main()
