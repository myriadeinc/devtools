WORKSPACE_ROOT=$(ROOT)

EMERALD=$(WORKSPACE_ROOT)/emerald/
DIAMOND=$(WORKSPACE_ROOT)/diamond/
PICKAXE=$(WORKSPACE_ROOT)/pickaxe/
SAPPHIRE=$(WORKSPACE_ROOT)/sapphire/

DIR = EMERALD_DIR=$(EMERALD) DIAMOND_DIR=$(DIAMOND) PICKAXE_DIR=$(PICKAXE) SHAPPHIRE_DIR=$(SAPPHIRE)
up:
	 $(DIR) docker-compose up
dev:
	$(DIR) docker-compose build
down:
	docker-compose down